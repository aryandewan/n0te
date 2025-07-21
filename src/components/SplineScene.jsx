'use client';

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
    return (
        <div className="w-full h-dvh relative">
            <Spline scene="https://prod.spline.design/gpRuyWzeAKHdOg9C/scene.splinecode" className = "w-full h-full"/>
        </div>
    );
}
