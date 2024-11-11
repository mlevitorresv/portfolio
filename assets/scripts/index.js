const downloadCV = () => {
    const url = '../docs/CV.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mlevitorresv.pdf`
    link.click();
    document.body.removeChild(link);
}