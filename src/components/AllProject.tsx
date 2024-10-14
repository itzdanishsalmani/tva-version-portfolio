import { useNavigate } from 'react-router-dom'
import { Menu,LastLine } from './others/Utils'

export const Project = () => {
    const navigate = useNavigate()
    return (

        <div className="h-screen w-screen p-4 ">
            <div className="custom-div relative ">
                <div className=" bg-orange-400 m-4 p-2 text-2xl md:text-4xl text-center font-bold">PROJECTS</div>
                <div className="md:mt-12 flex justify-center">
                <div className='grid grid-cols-2 md:grid-cols-4 md:gap-24'>
                <Card projectName='HYPERDEV'    img='project-icon.svg' link={()=>navigate('/project-1')}/>
                <Card projectName='PAYZE'       img='project-icon.svg' link={()=>navigate('/project-2')}/>
                <Card projectName='MEDIUMM'     img='project-icon.svg' link={()=>navigate('/project-3')}/>
                <Card projectName='TESTIMONIAL' img='project-icon.svg' link={()=>navigate('/project-4')}/>
                </div>
                <div className="img-right">
                <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
                </div>
                <div>
                    <Menu />
                    <LastLine 
                    pgno="2"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

interface projectNameProps {
    projectName:string,
    img:string,
    link:(event:React.MouseEvent<HTMLElement>) => void
    
}

const Card = ({projectName,img,link}:projectNameProps) => {
    return (
        <div>
        <div className="border-4 border-orange-400 shadow-lg shadow-orange-300 w-28 h-36 md:w-48 md:h-72 cursor-pointer">
            <div className='flex justify-center items-center h-full'>
                <img src={img} alt="" width={50} className='shadow-orange-300 shadow-lg'
                onClick={link}/>
            </div>
        </div>
        <div className="mt-8 text-center text-xl md:text-2xl font-bold bg-black text-orange-400">{projectName}</div>
        </div>
    )
}