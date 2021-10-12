import style from './style/Loader.module.scss';

export const Loader = () => {
	return <div className={style.loader}>
		<span className={style.circle}></span>
		<span className={style.circle}></span>
		<span className={style.circle}></span>
		<span className={style.circle}></span>
	</div>
}