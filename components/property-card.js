import { useMemo } from "react";

const PropertyCard = ({
  imageDimensions,
  imageDimensionIds,
  imageDimensionIds2,
  imageDimensionValues,
  imageDimensionValues2,
  imageDimensionPairs,
  imageDimensionPairIds,
  imageDimensionPairValues,
  card1Width,
  card1Flex,
  card1MinWidth,
  card1MaxWidth,
  shareBoxSizing,
  favoriteBoxSizing,
  addBoxSizing,
}) => {
  const card12Style = useMemo(() => {
    return {
      width: card1Width,
      flex: card1Flex,
      minWidth: card1MinWidth,
      maxWidth: card1MaxWidth,
    };
  }, [card1Width, card1Flex, card1MinWidth, card1MaxWidth]);

  const shareStyle = useMemo(() => {
    return {
      boxSizing: shareBoxSizing,
    };
  }, [shareBoxSizing]);

  const favoriteStyle = useMemo(() => {
    return {
      boxSizing: favoriteBoxSizing,
    };
  }, [favoriteBoxSizing]);

  const addStyle = useMemo(() => {
    return {
      boxSizing: addBoxSizing,
    };
  }, [addBoxSizing]);

  return (
    <div
      className="rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card12Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionIds}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionIds2}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionValues}
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
            alt=""
            src={imageDimensionValues2}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div
            className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start"
            style={shareStyle}
          >
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionPairs}
            />
          </div>
          <div
            className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start"
            style={favoriteStyle}
          >
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionPairIds}
            />
          </div>
          <div
            className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start"
            style={addStyle}
          >
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionPairValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;