import classNames from 'classnames';

type ColorName = 'red' | 'green' | 'blue' | 'yellow';

type BubbleProps = {
  colorName: ColorName;
};

const Bubble = ({ colorName }: BubbleProps) => {
  const bubbleClass = classNames('w-3 h-3 rounded-full', {
    [`bg-${colorName}-400`]: colorName,
  });

  return <div className={bubbleClass} />;
};

export default Bubble;
