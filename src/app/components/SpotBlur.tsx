const PlacementVar = () => <></>;

// bruke variabel
export const SpotBlur = ({ placementVar }: { placementVar: string }) => (
  <div
    className={`absolute h-100 w-100 bg-white/6 rounded-full blur-2xl ${placementVar}`}
  ></div>
);

// const getWell = (nuber: number) => {
//     return nuber + 1
// }
