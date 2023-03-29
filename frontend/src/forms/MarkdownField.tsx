

function MarkdownField(props: markdownFieldProps){

    return (
        <div className="mb-3 form-mardown">
            <div>
                <label htmlFor=""></label>
            </div>
        </div>
    )
}

export default MarkdownField

interface markdownFieldProps{
    displayName: string;
    field: string;
}