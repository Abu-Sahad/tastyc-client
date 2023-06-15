import { Parallax } from 'react-parallax';

const Cover = ({ img, tittle, text }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        ><div
            className="bg-cover bg-center h-[450px] flex items-center mb-10"
        >
                <div className="text-center text-black w-3/6 h-3/6 mx-auto my-auto flex justify-center items-center" style={{ backgroundColor: 'rgba(21, 21, 21, 0.6)' }}>
                    <div>
                        <h1 className="text-4xl uppercase text-white">{tittle}</h1>
                        <p className="mt-4 mx-auto text-white">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;