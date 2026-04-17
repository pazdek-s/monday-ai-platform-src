import svgPaths from "./svg-g452d2a98a";

// Avatar placeholder — no figma assets available outside Figma Make
function AvatarPlaceholder() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#a25ddc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>P</span>
    </div>
  );
}

function ProductLogoLarge() {
  return (
    <div className="absolute aspect-[112/112] left-[15.63%] right-[15.63%] top-1/2 translate-y-[-50%]" data-name="Product Logo / Large">
      <div className="absolute inset-[8.14%_6.65%_7.93%_6.51%]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1048 18.4643">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p31d4e00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p20525600} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3daf1f00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p35f83ac0} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8fa5880} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a8adc00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProductLogoSmall() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Product Logo / Small">
      <ProductLogoLarge />
    </div>
  );
}

function ProductLogoFull() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-center pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0" data-name=".Product logo - full">
      <ProductLogoSmall />
      <p className="font-['Poppins:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#323338] text-[16px] text-nowrap">monday</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#323338] text-[16px] text-nowrap">Work Management</p>
    </div>
  );
}

function IconPlatformNotifications() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p10df4a00} fill="var(--fill-0, #323338)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformInbox() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p3480b200} fill="var(--fill-0, #323338)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformSearch() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p39a67600} fill="var(--fill-0, #323338)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[28px] relative shrink-0 w-px">
      <div className="absolute bg-[#d0d4e4] inset-0" />
    </div>
  );
}

function RightContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px] flex items-center justify-center"><IconPlatformNotifications /></div>
      <div className="relative shrink-0 size-[40px] flex items-center justify-center"><IconPlatformInbox /></div>
      <div className="relative shrink-0 size-[40px] flex items-center justify-center"><IconPlatformSearch /></div>
      <Divider />
      <AvatarPlaceholder />
    </div>
  );
}

export default function TopBarInternal() {
  return (
    <div className="bg-[#edf1fc] content-stretch flex items-center justify-between pl-[8px] pr-[12px] py-0 relative size-full" data-name="Top bar [Internal]">
      <ProductLogoFull />
      <RightContainer />
    </div>
  );
}
