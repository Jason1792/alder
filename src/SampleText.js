import "./SampleText.css";

function SampleText() {
return (
<section className="sample-text-outer">
<div className="sample-text-inner inner">
<h1>HEADING ONE - Sed ut perspiciatis</h1>
<h2>HEADING TWO - Ut enim ad minima veniam</h2>
<h3>HEADING THREE - At vero eos et accusamus</h3>
<h4>HEADING FOUR - Nam libero tempore, cum soluta nobis</h4>
<p>Paragraph text. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<ul>
        <li>List item 1: Mauris consectetur odio ornare justo pharetra pharetra. Aliquam auctor gravida euismod. Maecenas ut egestas nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </li>
        <li>List item 2: Integer maximus auctor vulputate. Aliquam vestibulum velit a ultrices cursus. Cras pulvinar ex at nulla pulvinar finibus. Cras volutpat bibendum lectus, nec vehicula est accumsan in. </li>
</ul>
<p>Paragraph text. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro adipisci velit, quaerat voluptatem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
<p className="p-small">Paragraph text with 'p-small' class name. Use this to compare font sizes now that you've added the media queries to the 'body' element in text section of variables.css. Make sure you ramble on long enough so that it breaks to a new line.</p>
</div>
</section>
  );
}
export default SampleText;