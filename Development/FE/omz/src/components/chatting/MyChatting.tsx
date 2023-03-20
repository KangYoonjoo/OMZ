type Props = {
  item: string | undefined;
};

export default function MyChatting({ item }: Props) {
  return (
    <div className="flex justify-end items-end relative gap-[5px] mr-4">
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left capitalize text-[#6d6d6d]">
        timeStamp
      </p>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px] bg-black">
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left capitalize text-white">
          {item}
        </p>
      </div>
    </div>
  );
}