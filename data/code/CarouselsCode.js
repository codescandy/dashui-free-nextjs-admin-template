export const SlidesOnlyCode = `   
<Carousel controls={false} indicators={false} >
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />                                    
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />                                   
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide"/>                                    
    </Carousel.Item>
</Carousel>
`.trim();

export const WithControlCode = `   
<Carousel indicators={false}>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />                                    
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />                                   
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide"/>                                    
    </Carousel.Item>                               
</Carousel>
`.trim();

export const WithIndicatorsCode = `   
<Carousel indicators>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />                                    
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />                                   
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide"/>                                    
    </Carousel.Item>  
</Carousel>
`.trim();

export const WithCaptionCode = `   
function ControlledCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (        
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="text-white" >First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />
                <Carousel.Caption>
                    <h3 className="text-white" >Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide" />
                <Carousel.Caption>
                    <h3 className="text-white" >Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>        
    )
    
}
render(<ControlledCarousel />);
`.trim();

export const CrossfadeCode = `   
<Carousel fade indicators={false}>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />                                    
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />                                   
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide"/>                                    
    </Carousel.Item>
</Carousel>
`.trim();

export const IndividualCode = `   
<Carousel indicators={false}>
    <Carousel.Item interval={1000}>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />                                    
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide" />                                    
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide" />                                    
    </Carousel.Item>
</Carousel>
`.trim();

export const DarkVariantCode = `   
<Carousel variant="dark">
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="First slide" />
        <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Second slide"/>
        <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100" src="https://fakeimg.pl/1140x350/?text=Image%20Placeholder" alt="Third slide"/>
        <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
`.trim();

export const CarouselsCode = [
	SlidesOnlyCode,
	WithControlCode,
	WithIndicatorsCode,
	WithCaptionCode,
	CrossfadeCode,
	IndividualCode,
	DarkVariantCode
];

export default CarouselsCode;
