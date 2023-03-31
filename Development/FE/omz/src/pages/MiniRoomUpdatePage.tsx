import { images } from "../assets/images";
import Camera3D from "../components/common/Camera3D";
import TitleBar from "../components/common/TitleBar";
import ItemBox from "../components/miniRoom/ItemBox";
import NextBtn from "../components/signUp/NextBtn";
import { useState } from "react";
import { MiniroomBeta3 } from "../assets/3DMiniRoom/MiniroomBeta3";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
export default function MiniRoomUpdatePage() {
  const memberId = useRecoilValue(userStatus).id;

  const [itemStatus, setItemStatus] = useState<{ [key: string]: string }>({
    table: "1",
    lamp: "1",
    bed: "1",
  });

  const submitChange = () => {
    const data = [];
    const itemNames = Object.keys(itemStatus);
    for (const name of itemNames) {
      data.push({ name: name, state: itemStatus[name] });
    }
    console.log(data);
    // TODO 여기 이거 제출하면 댐
  };

  submitChange();

  const handleItems = (item: string) => {
    const variety = item.split("_")[0];
    const num = item.split("_")[1];
    console.log(itemStatus);
    setItemStatus({ ...itemStatus, [variety]: num });
  };
  return (
    <div className="w-full px-4 flex flex-col items-center">
      <TitleBar
        icon={images.mini_room_img}
        title={"000님의 MiniRoom"}
        goto={`/miniroom/${memberId}`}
      />
      <div className="w-full aspect-square">
        {/* <Camera3D
          MiniRoom={
            <MiniroomBeta position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        /> */}
        {/* <Camera3D
          MiniRoom={
            <MiniroomBeta2 position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        /> */}
        <Camera3D
          MiniRoom={
            <MiniroomBeta3 position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        />
      </div>
      <NextBtn
        comment="저장"
        logic={() => console.log("API나오면 변경사항 저장 해버룟")}
      />
      <div className="w-full h-1/4 mt-8">
        <ItemBox handleItems={handleItems} />
      </div>
    </div>
  );
}
