const px2vw = (size:number, width=1400):string => `${(size / width) * 100}vw`;

export default px2vw;