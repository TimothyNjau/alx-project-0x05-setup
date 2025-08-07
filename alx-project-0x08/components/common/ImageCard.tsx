import { GeneratedImageProps } from "@/interfaces";

const ImageCard : React.FC <GeneratedImageProps> = ({imageUrl, prompt, width, action
}) => {
    return (
        <div>
            <img src="" alt="" />
            <h2>Your prompt:</h2>
            <p>
                {prompt}
            </p>
        </div>
    )
}

export default ImageCard;