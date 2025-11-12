import cancelIcon from "../../assets/icons/cancel-icon.svg";
import { useLocation } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrows/arrow-back-icon.svg";

type BackButtonProps = {
  onClick: () => void;
  onKeyDown: (e: any) => void;
};

const BackButton = ({ onClick, onKeyDown }: BackButtonProps) => {
  const location = useLocation();

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={`${
          location.pathname === "/book-purchase" ? "w-[67px]" : "w-[47px]"
        }  h-[47px] p-[11px] flex items-center justify-center rounded-[10px] border-[3px] border-fifth cursor-pointer hover:scale-110 transition-all duration-1000`}
      >
        {location.pathname === "/" ? (
          <img src={cancelIcon} alt="Cancel Icon" />
        ) : (
          <img src={arrowBackIcon} alt="Arrow Back Icon" />
        )}
      </div>
    </>
  );
};

export default BackButton;
