import svgPaths from "./svg-x7qvlm4dxw";

function Button() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] px-[2px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Figtree:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#676879] text-[12px] uppercase whitespace-nowrap">Team Space</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Buttons">
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
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
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Platform / Search">
          <div className="absolute inset-[11.86%_11.56%_11.25%_11.56%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3011 12.3016">
              <path clipRule="evenodd" d={svgPaths.p3df0e700} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] size-[32px]" data-name="Close">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / More Actions">
              <div className="absolute inset-[21.25%_26.25%]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 11.5">
                  <g id="Union">
                    <path d={svgPaths.p38c9b000} fill="var(--fill-0, #676879)" />
                    <path d={svgPaths.p123a6900} fill="var(--fill-0, #676879)" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
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

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Button />
      <Frame1 />
    </div>
  );
}