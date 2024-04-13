import Image from "next/image";
import logo from '@/public/logo.jpeg'
const Loading = () => {
    return ( 
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image alt="logo" src={logo} width={120} height={120} className="animate-pulse duration-700 "/>
        </div>
     );
}
 
export default Loading;