import Cover from '../../../Shared/Cover/Cover';
import saladImg from '../../../assets/menu/salad-bg.jpg'

const Salad = () => {
    return (
        <div>
            <Cover
                img={saladImg}
                tittle='salad'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, nam. Veritatis quam ab asperiores autem!'
            ></Cover>
        </div>
    );
};

export default Salad;