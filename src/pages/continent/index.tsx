import { useRouter } from 'next/router'
import Header from '../../components/Header';

export default function ContinentPage(){
    const router = useRouter()

    return(
        <Header isTheContinentPage={false}/>
    );
}