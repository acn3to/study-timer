import style from './Clock.module.scss';

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [dozenMinute, unitMinute] = String(minutes).padStart(2, '0');
  const [dozenSecond, unitSecond] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.clockNumber}>{dozenMinute}</span>
      <span className={style.clockNumber}>{unitMinute}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{dozenSecond}</span>
      <span className={style.clockNumber}>{unitSecond}</span>
    </>
  );
}
