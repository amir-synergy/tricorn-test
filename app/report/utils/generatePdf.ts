import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFOptions {
    filename?: string;
    format?: [number, number];
    unit?: 'pt' | 'px' | 'in' | 'mm' | 'cm';
    orientation?: 'portrait' | 'landscape';
}

export const generatePDF = async (
    elementClassNmae: string,
    options: PDFOptions = {}
): Promise<void> => {
    const element = document.getElementsByClassName(elementClassNmae)[0];
    if (!element) {
        console.error(`Element with id "${elementClassNmae}" not found`);
        return;
    }

    try {
        // @ts-ignore
        const canvas = await html2canvas(element, {
            useCORS: true,
            scale: 1,
            logging: false,
            backgroundColor: null,
            onclone: (clonedDoc) => {
                const styles = clonedDoc.createElement('style');
                styles.innerHTML = `
          * {
            color: black !important;
            background: none !important;
            background-color: transparent !important;
            margin: 3cm!important;
          }
        `;
                clonedDoc.head.appendChild(styles);
            }
        });

        const imgData = canvas.toDataURL('image/png');

        const {
            filename = `${elementClassNmae}-pdf.pdf`,
            format = [canvas.width / 2, canvas.height / 2],
            unit = 'px',
            orientation = 'portrait'
        } = options;

        const pdf = new jsPDF({
            orientation,
            unit,
            format
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};


// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
//
// const generatePdf = async () => {
//     const element = document.getElementsByClassName('print')[0];
//     // @ts-ignore
//     const canvas = await html2canvas(element, {
//         scale: 2, // Adjust scale for better quality
//         useCORS: true, // Handle CORS issues
//         ignoreElements: (el) => el.classList.contains('ignore-pdf'), // Ignore specific elements
//     });
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//
//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//
//     const pageHeight = pdf.internal.pageSize.getHeight();
//     let heightLeft = pdfHeight;
//     let position = 0;
//
//     while (heightLeft >= 0) {
//         position = heightLeft - pdfHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
//         heightLeft -= pageHeight;
//     }
//
//     pdf.save('document.pdf');
// };
//
// export default generatePdf;