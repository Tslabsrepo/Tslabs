import React, { useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxProps {
    images: string[],
    isOpen: boolean,
    isClosed(): any,
    defaultImage?: string | null,
}
export default function LightBox({ isOpen, isClosed, images, defaultImage }: LightboxProps) {

    const [open, setOpen] = React.useState(false);
    const [slides, setSlides] = React.useState([]);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {

        if (images.length > 0) {
            let _slides: any = [];

            images.forEach((image: string, index) => {
                _slides.push({ src: image })

                if (image == defaultImage) {
                    setIndex(index);
                }
            });

            setSlides(_slides);
        }

    }, [isOpen])

    useEffect(() => {
        setOpen(isOpen);

    }, [isOpen])

    useEffect(() => {

        if (!open) {
            isClosed()
        }
    }, [open])


    return (
        <>


            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
        </>
    );
}