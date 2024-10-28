type BubbleProps = {
    colorName: string;
  };
  
  const Bubble = ({ colorName }: BubbleProps) => {
    return <div className={`w-3 h-3 bg-${colorName}-400 rounded-full`}></div>;
  };
  
  export default Bubble;
  