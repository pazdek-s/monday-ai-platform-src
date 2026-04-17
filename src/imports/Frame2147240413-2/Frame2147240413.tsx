import svgPaths from "./svg-a7goxfx26f";
import imgImage8 from "./35d77928fe99963e4f2e2a1944102cf4e381960d.png";
import imgImage7 from "./cb74c5298fcb9d4c82f33d348fd24afba471de9d.png";

function TitleBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Title bar">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] max-w-[376px] not-italic overflow-hidden relative shrink-0 text-[#323338] text-[24px] text-ellipsis tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[30px] overflow-hidden text-ellipsis" dir="auto">
          Recruitment pipeline
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Basic / DropdownChevron down">
          <div className="absolute bottom-[35%] flex items-center justify-center left-1/4 right-1/4 top-[35%]">
            <div className="-scale-y-100 flex-none h-[6px] w-[10px]">
              <div className="relative size-full" data-name="Icon/Back (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={svgPaths.p2e851900} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Icon/Back (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Button group">
      <div className="h-[32px] mr-[-8px] relative shrink-0 w-[72px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function ButtonBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button bar">
      <div className="content-stretch flex h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Invite</p>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Basic / Menu">
          <div className="absolute inset-[45%_11.66%_40%_15%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.668 3">
              <g id="Union">
                <path d={svgPaths.p3d92b780} fill="var(--fill-0, #676879)" />
                <path d={svgPaths.pbf9c900} fill="var(--fill-0, #676879)" />
                <path d={svgPaths.p3ed9aa80} fill="var(--fill-0, #676879)" />
              </g>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function TitleAndActions() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0 w-[968px]" data-name="Title and actions">
      <TitleBar />
      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Integrations">
          <div className="absolute inset-[10.53%_10.53%_10.54%_9.79%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9373 15.7858">
              <path clipRule="evenodd" d={svgPaths.p13fd0e00} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Integrate</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Robot">
          <div className="absolute inset-[17.08%_9.89%_16.14%_9.88%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0455 13.3561">
              <g id="Union">
                <path d={svgPaths.p9994480} fill="var(--fill-0, #676879)" />
                <path d={svgPaths.pcba6a00} fill="var(--fill-0, #676879)" />
                <path clipRule="evenodd" d={svgPaths.p8995100} fill="var(--fill-0, #676879)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Automate</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Update">
          <div className="absolute inset-[9.75%_10.17%_13.01%_12.52%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4615 15.4486">
              <path clipRule="evenodd" d={svgPaths.p203a9200} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <ButtonGroup />
      <div className="h-[28px] relative shrink-0 w-[88px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <ButtonBar />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <TitleAndActions />
    </div>
  );
}