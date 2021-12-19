
const blogs = ({articles}) => {
  console.log(articles);
    return (
        <div>
            List of blogs
        </div>
    )
}

export default blogs

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data= await response.json()

    return {
        props: {
            articles: data,
        }
    };
}
