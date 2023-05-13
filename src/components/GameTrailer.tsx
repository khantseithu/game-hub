import useTrailer from "../hooks/useTrailer";
type Props = {
  gameId: number;
};
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <p>Loading trailer...</p>;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data["max"]} poster={first.preview} controls />
  ) : null;
};
export default GameTrailer;
