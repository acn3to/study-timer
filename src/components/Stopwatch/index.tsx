import Button from '../Buttton';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose one card and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
}
