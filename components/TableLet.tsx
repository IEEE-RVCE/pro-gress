
import styles from '../styles/TableLet.module.css';
// import Image from 'next/image';
export interface TableLetProps {
    iconlocs: {
        loc: string;
        width: number;
        height: number;
        alt:string;
        key:number
    }[];
}

/**
 * icons with light separator between them
 * @param param0 
 */
export default function TableLet({ iconlocs }: TableLetProps) {
    return (
        <table className={styles.fullTable}>
            <tbody>
                <tr>
                    {iconlocs.map((e) => (
                        // <Image src={e.loc} width={e.width} height={e.height} alt={e.alt} key={e.key}></Image>
                        <img src={e.loc} width={e.width} height={e.height} alt={e.alt} key={e.key}></img>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}
