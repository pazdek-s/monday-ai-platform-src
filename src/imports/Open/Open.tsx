import svgPaths from "./svg-rlse7p5x2l";
import imgLayer032 from "./0615a3c31719c6364c9813b9e0fa2ac8d8dd96c1.png";
import imgAgentsAvatarsContained from "./16500cfa3be970c70a57416816f4afe3cd395907.png";
import imgEnhancedImage62 from "./1d2ab994643957b43cbc8129bc63acb1c08db29b.png";

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#676879] text-[12px] text-ellipsis whitespace-nowrap" dir="auto">
            MY SPACE
          </p>
          <div className="content-stretch flex gap-[8px] items-center justify-center opacity-0 relative rounded-[8px] shrink-0 size-[32px]">
            <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[32px] top-0" data-name="Close">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Board">
                <div className="absolute inset-[15%_10%]" data-name="Union">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                    <path clipRule="evenodd" d={svgPaths.p23226200} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute left-[9px] overflow-clip size-[16px] top-[8px]" data-name="Icon / Basic / Dropdown Chevron Left">
              <div className="absolute bottom-1/4 left-[35%] right-[35%] top-1/4" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 8">
                  <path d={svgPaths.p2ab1f4b2} fill="var(--fill-0, #676879)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left Side">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Platform / My Week">
        <div className="absolute inset-[9.11%_9.11%_9.11%_9.1%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0857 13.0857">
            <g id="Union">
              <path d={svgPaths.p14c49680} fill="var(--fill-0, #676879)" />
              <path clipRule="evenodd" d={svgPaths.p1ac0d900} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Regular',sans-serif] h-[22px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#676879] text-[14px]">
        <p className="leading-[20px]" dir="auto">
          My work
        </p>
      </div>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left Side">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[10%_10.01%_10.01%_10%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.799 12.7992">
            <g id="Union">
              <path d={svgPaths.p12e24200} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p2f65f000} fill="var(--fill-0, #676879)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Regular',sans-serif] h-[22px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#676879] text-[14px]">
        <p className="leading-[20px]" dir="auto">
          Recents
        </p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Right Side">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown icon">
        <div className="absolute bottom-1/4 left-[35%] right-[35%] top-1/4" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 8">
            <path d={svgPaths.p1361c900} fill="var(--fill-0, #676879)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeftPaneTopDefault() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Top-Default">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <LeftSide1 />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Top-Default">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <LeftSide />
          </div>
        </div>
      </div>
      <LeftPaneTopDefault />
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Left Side">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Agents</p>
      </div>
    </div>
  );
}

function Actions() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center justify-end min-h-px min-w-px" data-name="Actions" />;
}

function LeftPaneFavorites() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Left Pane/Favorites">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <LeftSide2 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#00c875] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Agents avatars [Contained]">
          <div className="-translate-x-1/2 absolute aspect-[160/160] bottom-0 left-1/2 top-0" data-name="Layer 03 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[226.58%] left-[-28.13%] max-w-none top-[12.33%] w-[155%]" src={imgLayer032} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Onboarding buddy</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame3 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#676879] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Available, 5 assets available</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ff5ac4] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Agents avatars [Contained]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[222.43%] left-[-50.74%] max-w-none top-[-23.13%] w-[192.38%]" src={imgAgentsAvatarsContained} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Candidate screener</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame4 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#676879] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Ready to start</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fdab3d] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Agents avatars [Contained]">
          <div className="-translate-x-1/2 absolute aspect-[160/160] bottom-0 left-1/2 top-0" data-name="enhanced_image (6) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[153.3%] left-[-26.88%] max-w-none top-[-4.15%] w-[135%]" src={imgEnhancedImage62} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Interviews analyst</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame5 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#676879] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Ready to start</p>
      </div>
    </div>
  );
}

function ItemsGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Items group">
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Agent list">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[13px] items-center p-[8px] relative w-full">
            <div className="content-stretch flex items-start justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="AI agent avatar">
              <Frame6 />
              <div className="absolute content-stretch flex flex-col items-start right-[-4px] top-[20px]" data-name="Properties">
                <div className="relative shrink-0 size-[8px]">
                  <div className="absolute inset-[-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" fill="var(--fill-0, #00C875)" id="Ellipse 1" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Agent list">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[13px] items-center p-[8px] relative w-full">
            <div className="content-stretch flex items-start justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="AI agent avatar">
              <Frame7 />
            </div>
            <Frame1 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Agent list">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[13px] items-center p-[8px] relative w-full">
            <div className="content-stretch flex items-start justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="AI agent avatar">
              <Frame8 />
            </div>
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Items">
      <LeftPaneFavorites />
      <ItemsGroup />
    </div>
  );
}

function LeftSide3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Left Side">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Favorites</p>
      </div>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="🔴 [DEPRECATED] IconButton - to swap">
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
      </div>
      <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="🔴 [DEPRECATED] IconButton - to swap">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Platform / Search">
          <div className="absolute inset-[11.86%_11.56%_11.25%_11.56%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3011 12.3016">
              <path clipRule="evenodd" d={svgPaths.p3df0e700} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftPaneFavorites1() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Left Pane/Favorites">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <LeftSide3 />
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Dropdown icon">
            <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3.6">
                <path d={svgPaths.p9e9b00} fill="var(--fill-0, #323338)" id="Union" />
              </svg>
            </div>
          </div>
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function LeftSide4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left Side">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Platform / Board">
        <div className="absolute inset-[15%_10%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 11.2">
            <path clipRule="evenodd" d={svgPaths.p3a73d100} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Regular',sans-serif] h-[22px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#323338] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Recruitment pipeline</p>
      </div>
    </div>
  );
}

function LeftSide5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left Side">
      <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Monday Vibe Logo">
        <div className="absolute inset-[15%_10.22%_13.86%_10%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7649 11.3821">
            <path clipRule="evenodd" d={svgPaths.p157c1800} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Regular',sans-serif] h-[22px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#676879] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Executive overview</p>
      </div>
    </div>
  );
}

function ItemsGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Items group">
      <div className="bg-[rgba(194,213,255,0.4)] content-stretch flex h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[248px]" data-name="Left right pane list item - Favorite">
        <LeftSide4 />
      </div>
      <div className="content-stretch flex h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[248px]" data-name="Left right pane list item - Favorite">
        <LeftSide5 />
      </div>
    </div>
  );
}

function LeftPaneFavoritesWithItems() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name=".Left Pane/Favorites with items">
      <LeftPaneFavorites1 />
      <ItemsGroup1 />
    </div>
  );
}

function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Section content">
      <Top />
      <Items1 />
      <LeftPaneFavoritesWithItems />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Items">
      <SectionHeader />
      <SectionContent />
    </div>
  );
}

export default function Open() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[12px] relative rounded-tl-[16px] size-full" data-name="Open">
      <Items />
    </div>
  );
}