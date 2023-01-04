// Receives the value
export interface Props {
  onClickHandler: React.MouseEventHandler;
  content: string | number;
}

export default function FooterButton({ onClickHandler, content }: Props) {
  return (
    <div className="my-4 flex justify-start px-4">
      <button
        className="border-2 border-solid border-netflix-gray-footer p-2 hover:text-netflix-white-font"
        onClick={onClickHandler}
      >{content}</button>
    </div>
  );
}
