import Carousel from "react-bootstrap/Carousel";

function ProjectCarousel({ images = [] }) {
    // Se não houver imagens, não renderiza o carousel
    if (!images.length) {
        return null;
    }

    return (
        <Carousel interval={null}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectCarousel;