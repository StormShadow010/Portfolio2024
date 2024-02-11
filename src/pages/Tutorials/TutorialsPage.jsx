
import { Image } from 'antd';

const dataTutorial = [
    {
        id: 1,
        title: "AR Project -  LOGIC GATES ROOM con Unity",
        description: "Project on the use of logic gates like AND, OR, XOR in an AR application.",
        imageTutorial: "assets/tutorials/tutorial1.png",
        linkVideoTutorial: "https://www.youtube.com/embed/OC43vdd1IzE?si=3B_9fCBPVxLW1-gb",
    },
    {
        id: 2,
        title: "Aeropendulum - Control Systems II",
        description: "Project based on the construction of an aeropendulum which has a control system carried out through the Simulink platform linked to Matlab.",
        imageTutorial: "assets/tutorials/tutorial2.png",
        linkVideoTutorial: "https://www.youtube.com/embed/Q6RrIi8fYpw?si=KcY_yKbf7TNp3TWs",
    },
    {
        id: 3,
        title: "AR Foundation - Demos (Apps) Unity",
        description: "Project focused on showing the programming of the AR Foundation asset demos for Unity.",
        imageTutorial: "assets/tutorials/tutorial3.png",
        linkVideoTutorial: "https://www.youtube.com/embed/Z4KZAXRldl0?si=abdJq6mJ80BKPnK6",
    },
    {
        id: 4,
        title: "MLDS1 Applied Project - Data Analysis and Visualization with Python",
        description: "Project focused on data analysis and visualization with Python, in this case about Airbnb",
        imageTutorial: "assets/tutorials/tutorial4.png",
        linkVideoTutorial: "https://www.youtube.com/embed/fLJwXV95Ewc?si=-Sxs5KUiX0sp7fSV",
    },
    {
        id: 5,
        title: "MLDS2 Applied Project - Introduction to Machine Learning with Python",
        description: "Project focused on the use of Machine Learning with Python, in this case on developing predictive models that can predict the rate of theft crimes in the city of Toronto based on historical data.",
        imageTutorial: "assets/tutorials/tutorial5.png",
        linkVideoTutorial: "https://www.youtube.com/embed/tbbmzgjlkyM?si=un3CcR0-8XbJf1ho",
    },
    {
        id: 6,
        title: "MLDS3 Applied Project - Big Data",
        description: "Project focused on the use of Big Data, so a data set Game Recommendations on Steam from Kaggle was used to provide Video Game recommendations",
        imageTutorial: "assets/tutorials/tutorial6.png",
        linkVideoTutorial: "https://www.youtube.com/embed/esfRkm5lQ_M?si=sF5TBQHBcrWqDIR1",
    },
]


export const TutorialsPage = () => {
    return (
        <div id='tutorials' className="w-[100%] bg-[#363062] pb-8 ">
            <div className="text-5xl font-extrabold text-center md:mb-[10px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Tutorials
                </span>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:mt-0'>
                {
                    dataTutorial.map((tutorial) => {

                        return (
                            <div key={tutorial.id} className="bg-[#435585] w-[90%] mx-auto px-2 rounded-lg flex flex-col items-center justify-evenly shadow-2xl p-2">
                                <h1 className='text-[#F5E8C7] font-mainFont font-bold text-center text-[1.2rem]'>{tutorial.title}</h1>
                                <Image
                                    className='w-[80%] rounded-2xl mt-1 md:w-[100%]'

                                    preview={{
                                        imageRender: () => (
                                            <div className=''>
                                                <iframe className="w-[100%] h-[250px] md:w-[500px] md:h-[400px]" src={tutorial.linkVideoTutorial} title={tutorial.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        ),
                                        toolbarRender: () => null,
                                    }}
                                    src={tutorial.imageTutorial}
                                />
                                <p className='text-white text-center font-medium font-mainFont text-[1rem]'>{tutorial.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>

            </div>
        </div>
    )
}
