import cv2
import pytesseract

# Only needed on Windows — set to your actual install path
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

def scan_label():
    # Open webcam
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print(" Cannot access webcam")
        return ""

    print(" Webcam opened — press 's' to scan, 'q' to quit.")

    while True:
        ret, frame = cap.read()
        if not ret:
            print(" Failed to grab frame")
            break

        # Show live video
        cv2.imshow("Label Scanner - Press 's' to capture", frame)

        key = cv2.waitKey(1) & 0xFF

        if key == ord('s'):  # when you press 's'
            print(" Scanning image...")

            # Convert to grayscale for better OCR accuracy
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # Optional: clean up the image
            gray = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

            # Perform OCR
            text = pytesseract.image_to_string(gray, config='--psm 6')

            print("\n Text detected:\n")
            print(text)

            # Save image for reference (optional)
            cv2.imwrite("scanned_label.png", frame)

            # Close everything
            cap.release()
            cv2.destroyAllWindows()
            return text

        elif key == ord('q'):  # quit
            print(" Exiting scanner.")
            break

    cap.release()
    cv2.destroyAllWindows()
    return ""


if __name__ == "__main__":
    scan_label()