import style from './Clock.module.scss';

export default function Clock() {
  return (
    <>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>
  );
}
