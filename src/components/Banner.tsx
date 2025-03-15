import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/banner.jpg'}
            alt='cover'
            fill={true}
            priority
            style={{ objectFit: "cover" }}
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium font-serif bg-white/30 backdrop-blur-low px-4 py-2 rounded-lg'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif '>Finding the perfect venue has never been easier. Whether it's a wedding, coperate event, or private party we connecting people to the perfect place</h3>
            </div>
        </div>
    );
}