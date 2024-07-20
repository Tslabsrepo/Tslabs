export function getUploadImage(path: string) {
    return path;
    // return "https://ts-labs-admin-0ff0c6162225.herokuapp.com" + path;
}


export const parseHTMLToBlocks = (htmlContent: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    console.log({ htmlContent });
    const blocks: any[] = [];

    doc.body.childNodes.forEach((node) => {
        console.log({ node })
        if (node.nodeName === 'P') {
            blocks.push({
                __component: 'text-block',
                content: node.textContent
            });
        } else if (node.nodeName === 'IMG') {
            blocks.push({
                __component: 'image-block',
                image: node.getAttribute('src') // Adjust this according to how you handle images
            });
        }
        // Add more conditions based on your block types
    });

    return blocks;
};
