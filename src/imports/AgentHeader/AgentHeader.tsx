import svgPaths from "./svg-qrznt2pdh6";
import imgImage6 from "./ceff3bd674f59c25e8aefb5010123dafd9350349.png";

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          Onboarding buddy
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dropdown icon">
        <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p13a5f900} fill="var(--fill-0, #323338)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <Button />
    </div>
  );
}

function RightButtons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Right buttons">
      <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / New Chat">
          <div className="absolute inset-[6.25%_7.59%_11.25%_7.57%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9664 16.5004">
              <g id="Vector">
                <path d={svgPaths.p14663440} fill="var(--fill-0, #323338)" />
                <path d={svgPaths.p10abea80} fill="var(--fill-0, #323338)" />
              </g>
            </svg>
          </div>
        </div>
      </button>
      <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Sidebar">
          <div className="absolute inset-[15%_10%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p96f3980} fill="var(--fill-0, #323338)" id="Subtract" />
            </svg>
          </div>
        </div>
      </button>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] size-[32px]" data-name="IconButton">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Basic / Close Small">
              <div className="absolute inset-[25.25%_25.25%_25.26%_25.25%]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89922 9.89854">
                  <path d={svgPaths.p10f2f000} fill="var(--fill-0, #323338)" id="Union" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalTitle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Modal title">
      <Header />
      <RightButtons />
    </div>
  );
}

function AiHeader() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="AI header">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[10px] relative w-full">
          <ModalTitle />
        </div>
      </div>
    </div>
  );
}

export default function AgentHeader() {
  return (
    <div className="backdrop-blur-[40px] content-stretch flex flex-col items-start justify-center relative size-full" data-name="Agent header">
      <AiHeader />
    </div>
  );
}