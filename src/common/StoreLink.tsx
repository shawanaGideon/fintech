import AppleLogo from "../assets/logos/app_store.svg";
import GoogleLogo from "../assets/logos/google_play.svg";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
import StoreLinks from "../common/StoreLinks";

interface StoreLinkProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLink({ type }: StoreLinkProps) {
  const textLinkClassesA =
    " hidden lg:flex md:flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800 ";

  const textLinkClassesB =
    " my-4 border flex gap-3 rounded-lg bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800 ";

  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 justify-center space-x-2 sm:flex md:justify-normal">
        <StoreLinks
          href="https://www.apple.com/appstore"
          upperText="Download on the"
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className={textLinkClassesA}
        />
        <StoreLinks
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Play Store"
          logo={GoogleLogo}
          target="_blank"
          className={textLinkClassesA}
        />
      </div>
    );
  }
  if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLinks
          href="https://www.apple.com/appstore"
          upperText="Download on the"
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className={textLinkClassesB}
        />
        <StoreLinks
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Play Store"
          logo={GooglePlayBright}
          target="_blank"
          className={textLinkClassesB}
        />
      </>
    );
  }
}

export default StoreLink;
