"use client"
import React from 'react'
import styles from './styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { skills } from '@/lib/data'
import { motion } from 'framer-motion' 

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
    const { ref } = useMenuInView("Skills")

    return (
        <div ref={ref} id="skills" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Skills</span> 
            </div>
            <div className={styles.skills}>
                <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'>
                    {
                        skills.map((skill, index) => (
                            <motion.li 
                            variants={ fadeInAnimationVariants }
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                            className='bg-gray-50/[0.5] border border-white py-2 px-3 rounded-lg' key={index}>{ skill }</motion.li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
