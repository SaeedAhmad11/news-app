import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Newsitem=(props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <p className="text-muted"> By {!author? "Unknown" : author} on {new Date(date).toDateString()}</p>
        <Card.Title>{title}</Card.Title>
        <Badge className='mb-2' bg="primary">{source}</Badge>
        <Card.Text>
          {description}
        </Card.Text>
        <Button href={newsUrl} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }


export default Newsitem
