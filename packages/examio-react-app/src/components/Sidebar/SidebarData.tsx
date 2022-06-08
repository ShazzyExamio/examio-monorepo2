import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import { logout } from '../../services/user.service'



export const SidebarData = [
    {
        title: 'Übersicht',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Lernplan',
        path: '/lernplan',
        icon: <FaIcons.FaTrophy />
    },
    {
        title: 'Kurse',
        path: '/kurse',
        icon: <FaIcons.FaGraduationCap />
    },
    {
        title: 'Webinare',
        path: '/webinare',
        icon: <FaIcons.FaVideo />
    },
    {
        title: 'Aufgaben',
        path: '/aufgaben',
        icon: <FaIcons.FaStar />
    },
    {
        title: 'Klausuren',
        path: '/klausuren',
        icon: <FaIcons.FaClipboard />
    },
    {
        title: 'Logout',
        path: '/login',
        onClick: logout(),
        icon: <FaIcons.FaLongArrowAltDown />
    }
]
