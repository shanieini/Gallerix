import gallryPhoto from '../assets/style/img/gallerix2.png';

export const Header = () => {

    return <header className="header ">
        <div className="header-wrapper ">
            <div className="btn-header" >
                <img src={gallryPhoto} alt="" />
            </div>
        </div>
    </header>
}