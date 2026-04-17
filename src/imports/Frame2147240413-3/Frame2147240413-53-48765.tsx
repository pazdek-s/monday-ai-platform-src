import svgPaths from "./svg-78wayi719d";

function Button() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] px-[2px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Figtree:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#676879] text-[12px] uppercase whitespace-nowrap">Team Space</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Buttons">
      <button className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Basic / Menu">
          <div className="absolute inset-[45%_11.66%_40%_15%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7344 2.4">
              <g id="Union">
                <path d={svgPaths.p1dd07400} fill="var(--fill-0, #676879)" />
                <path d={svgPaths.p3257f1c0} fill="var(--fill-0, #676879)" />
                <path d={svgPaths.p2f072280} fill="var(--fill-0, #676879)" />
              </g>
            </svg>
          </div>
        </div>
      </button>
      <button className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Platform / Search">
          <div className="absolute inset-[11.86%_11.56%_11.25%_11.56%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3011 12.3016">
              <path clipRule="evenodd" d={svgPaths.p3df0e700} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Buttons />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Button />
      <Frame1 />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Avatar Container">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-center text-white">
        <p className="leading-[16px]">M</p>
      </div>
    </div>
  );
}

function TextFieldContainer() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Text field container">
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[4px] py-[4px] relative w-full">
          <div className="bg-[#fdab3d] content-stretch flex items-center p-[2px] relative rounded-[2.899px] shrink-0" data-name="❖ Start element">
            <AvatarContainer />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#323338] text-[16px] text-ellipsis whitespace-nowrap">
            <p className="leading-[22px] overflow-hidden text-ellipsis">Marketing team</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="_DropdownButton">
            <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Basic / Dropdown Chevron Down">
                <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Union">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                    <path d={svgPaths.p13a5f900} fill="var(--fill-0, #323338)" id="Union" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Input container">
      <TextFieldContainer />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Dropdown">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start justify-center relative shrink-0 w-full" data-name="_base/Dropdown">
          <InputContainer />
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Icon Button">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Basic / Add">
          <div className="absolute inset-[11.25%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
              <path clipRule="evenodd" d={svgPaths.pfb9b280} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <Frame />
      <Frame3 />
    </div>
  );
}