import { v4 as uuidv4 } from 'uuid';
import './woodGallery.style.css';
import { woodGalleryStub as stub } from '../stubs/woodGallery/woodGalleryStub';

export default function WoodGallery() {
	const galleryCards = stub.map((i,e) => {
	const { name, price, dimensions, notes } = i;

	return (
			<div key={uuidv4()} className="gallery-card">
				<div>{name}</div>
				<div>{price}</div>
				<div>{dimensions}</div>
				<div>{notes}</div>
			</div>
		)
	});

	return (
		<div className="wood-gallery-container index-position">
			<p>Wood Gallery</p>
			<div className="gallery-container">
				{galleryCards}
			</div>
		</div>
	);
};