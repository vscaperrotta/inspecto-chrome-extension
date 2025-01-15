import React, { useEffect, useState } from 'react';
import { nullSafe, computeContentSize } from 'Utils/globalMethods';
import Border from './Border';
import Clutter from './Clutter';
import Font from './Font';
import Properties from './Properties';
import Tag from './Tag';
import Tooltip from './Tooltip';

function Inspector() {
  const [active, setActive] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [computedStyles, setComputedStyles] = useState({});
  const [elementRect, setElementRect] = useState(null);

  useEffect(() => {
    function handleMessage(message, sender, sendResponse) {
      if (message.action === 'INIT') {
        setActive((prevActive) => !prevActive);
      }
    }

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      setHoveredElement(null);
      return;
    }

    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setHoveredElement(target);

      if (target && target.nodeType === 1) {
        const styles = window.getComputedStyle(target);

        const dot = nullSafe(() => target.className, '') !== '' ? '.' : '';
        const classes = `${dot}${nullSafe(() => target.className, '').replaceAll(' ', '.')}`;

        const contentSizes = computeContentSize(styles);

        setComputedStyles({
          classes: classes || '',
          styles: {
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            display: styles.display,
            fontFamily: styles.fontFamily,
            fontSize: styles.fontSize,
            position: styles.position,
            height: styles.height,
            width: styles.width,
          },
          clutter: {
            height: contentSizes.height,
            width: contentSizes.width,
            margin: contentSizes.margin,
            padding: contentSizes.padding,
          },
        });

        const rect = target.getBoundingClientRect();
        setElementRect({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      } else {
        setElementRect(null);
      }
    }

    document.addEventListener('mousemove', handleMouseMove, true);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove, true);
    };
  }, [active]);

  if (!active || !hoveredElement) return null;

  const tagName = hoveredElement.tagName ? hoveredElement.tagName.toLowerCase() : 'n/a';

  return (
    <>
      {elementRect && <Border elementRect={elementRect} />}

      <Tooltip
        mousePos={{
          top: mousePos.y + 10,
          left: mousePos.x + 10,
        }}
      >
        <Tag
          tag={tagName}
          classes={computedStyles.classes}
        />
        <Clutter
          height={computedStyles.clutter.height}
          width={computedStyles.clutter.width}
          margin={computedStyles.clutter.margin}
          padding={computedStyles.clutter.padding}
        />
        <Font
          fontFamily={computedStyles.styles.fontFamily}
        />
        <Properties
          properties={[
            { label: 'Color: ', value: computedStyles.styles.color },
            { label: 'Background: ', value: computedStyles.styles.backgroundColor },
            { label: 'Display: ', value: computedStyles.styles.display },
            { label: 'Font size: ', value: computedStyles.styles.fontSize },
            { label: 'Position: ', value: computedStyles.styles.position },
          ]}
        />
      </Tooltip>
    </>
  );
}

export default Inspector;
