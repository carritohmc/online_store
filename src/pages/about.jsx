import './about.css';

const About = () => {

    return (
        <div className='aboutDiv'>
            <div className='backgroundDiv'>

            <button className="btn btn-info"> Go To Catalog</button>
                  <h3> Site was created by F.M.Alm</h3>
            <h4>Email</h4>
            <h5>something@gmail.com</h5>
            <h5>Address: 1234 Peach Street Atlanta GA</h5>

            </div>
            <div className='imageDiv'>

            <img src={"/images/panelBackgroundSm.png"} />
            </div>


        </div>



    );



    
    
}
export default About; 