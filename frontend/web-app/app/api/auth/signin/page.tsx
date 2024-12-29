import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

type Props = {
    callbackUrl: string
}

export default function SignIn(props: any) {

    return (
        <EmptyFilter
            title='You need to be logged in to do that'
            subtitle='Please click below to login'
            showLogin
            callbackUrl={'/'}
        />
    )
}