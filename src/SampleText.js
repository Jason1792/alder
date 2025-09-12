import "./SampleText.css";

function SampleText() {
return (
<section className="sample-text-outer">
<div className="sample-text-inner inner">
<h1>HEADING ONE - MAKE SURE THIS HERE THING GETS TO TWO OR, DARE I SUGGEST, THREE LINES</h1>
<h2>HEADING TWO - MAKE SURE THIS HERE THING RAMBLES ON LONG ENOUGH THAT IT MAKES IT TO A SECOND, OR A THIRD, OR A FOURTH, LINE.</h2>
<h3>HEADING THREE - MAKE SURE THIS HERE THING RAMBLES ON LONG ENOUGH THAT IT MAKES IT TO A SECOND, OR A THIRD, OR A FOURTH, LINE.</h3>
<h4>HEADING FOUR - MAKE SURE THIS HERE THING RAMBLES ON LONG ENOUGH THAT IT MAKES IT TO A SECOND, OR A THIRD, OR A FOURTH, LINE.</h4>
<p>Paragraph text. Use this to compare font sizes now that you've added the media queries to the 'body' element in text section of variables.css. Make sure you ramble on long enough so that it breaks to a new line. For real, dog, make sure you ramble on long enough so that it breaks to a new line, or, even better, a few lines.</p>
<ul>
        <li>List item, which, of course, is nested in an unordered list. Design and operationalize organizational strategies including sustainability roadmaps, new business units, teams and internal functions, tailored to each client&apos;s mission, market, and stage of growth.</li>
        <li>Build from the ground up by developing structures, workflows, and governance models where none exist. Support clients in launching new programs, teams, or capabilities that align with strategic priorities.</li>
</ul>
<p>Paragraph text. Use this to compare font sizes now that you've added the media queries to the 'body' element in text section of variables.css.</p>
<p className="p-small">Paragraph text with 'p-small' class name. Use this to compare font sizes now that you've added the media queries to the 'body' element in text section of variables.css. Make sure you ramble on long enough so that it breaks to a new line.</p>
</div>
</section>
  );
}
export default SampleText;