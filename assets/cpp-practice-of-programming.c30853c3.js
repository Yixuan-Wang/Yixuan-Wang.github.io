import{_ as l}from"./TheArticle.0d6b213b.js";import{o,f as p}from"./app.1f0a3599.js";const i="\u7A0B\u8BBE C++ \u7B14\u8BB0",B="2021-06-26T00:00:00.000Z",F="comp",d=["cpp","pl"],C={setup(t,{expose:n}){const s={title:"\u7A0B\u8BBE C++ \u7B14\u8BB0",date:"2021-06-26T00:00:00.000Z",category:"comp",tags:["cpp","pl"]};return n({frontmatter:s}),(e,c)=>{const a=l;return o(),p(a,{frontmatter:s,inner:`<div><p>\u7A0B\u8BBE\u8BFE\u7684 C++ \u7B14\u8BB0\u3002\u4E0A\u534A\u5B66\u671F\u662F\u8BED\u6CD5\u53CA STL\uFF0C\u4E0B\u534A\u5B66\u671F\u662F\u7B97\u6CD5\u57FA\u7840\u3002</p>
<!-- more -->
<article note>
<h2 id="\u51FD\u6570\u53CA\u5176\u7C7B\u578B" tabindex="-1">\u51FD\u6570\u53CA\u5176\u7C7B\u578B</h2>
<h3 id="c-11-lambda-\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8FD4\u56DE\u503C" tabindex="-1">C++ 11 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8FD4\u56DE\u503C</h3>
<p>C++ \u63D0\u4F9B\u4E86 <code>auto</code> \u5173\u952E\u5B57\u4F5C\u81EA\u52A8\u7C7B\u578B\u63A8\u65AD\uFF0C\u4F46\u5728 C++ 11 \u4E2D\u4E0D\u80FD\u81EA\u52A8\u63A8\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5FC5\u987B\u901A\u8FC7 <code>decltype()</code> \u6307\u660E\u3002\u800C lambda \u8868\u8FBE\u5F0F\u6CA1\u6709\u5177\u540D\u7C7B\u578B\uFF0C\u56E0\u6B64\u9700\u8981\u901A\u8FC7\u5305\u88C5\u5728<strong>\u51FD\u6570\u5BF9\u8C61</strong>\uFF08<code>function</code>\uFF09\u4E2D\u6765\u89E3\u51B3\u3002</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #C678DD">#include</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&lt;functional&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic">// \`std::function\` \u5728 &lt;functional&gt; \u5934\u6587\u4EF6\u91CC</span></span>
<span class="line"><span style="color: #C678DD">using</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">namespace</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">std</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">function</span><span style="color: #ABB2BF">&lt;</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> (</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF">)&gt; </span><span style="color: #61AFEF">foo</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> [</span><span style="color: #C678DD">=</span><span style="color: #ABB2BF">](</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">){ </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> a </span><span style="color: #C678DD">+</span><span style="color: #ABB2BF"> b; };</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">#include</span><span style="color: #24292F"> </span><span style="color: #0A3069">&lt;functional&gt;</span><span style="color: #24292F"> </span><span style="color: #6E7781">// \`std::function\` \u5728 &lt;functional&gt; \u5934\u6587\u4EF6\u91CC</span></span>
<span class="line"><span style="color: #CF222E">using</span><span style="color: #24292F"> </span><span style="color: #CF222E">namespace</span><span style="color: #24292F"> </span><span style="color: #953800">std</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #953800">function</span><span style="color: #24292F">&lt;</span><span style="color: #CF222E">int</span><span style="color: #24292F"> (</span><span style="color: #CF222E">int</span><span style="color: #24292F">)&gt; </span><span style="color: #8250DF">foo</span><span style="color: #24292F">(</span><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #953800">a</span><span style="color: #24292F">) {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> [</span><span style="color: #CF222E">=</span><span style="color: #24292F">](</span><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #953800">b</span><span style="color: #24292F">){ </span><span style="color: #CF222E">return</span><span style="color: #24292F"> a </span><span style="color: #CF222E">+</span><span style="color: #24292F"> b; };</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p><code>function&lt;&gt;</code> \u7C7B\u6A21\u677F\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u51FD\u6570\u7684\u7C7B\u578B\u3002\u4EFF\u7167\u666E\u901A\u51FD\u6570\u7684\u7C7B\u578B\uFF08<code>return_type(arg_type,...)</code>\uFF09\u5199\u5373\u53EF\u3002</p>
<p>\u5F53\u7136\uFF0C\u5728 C++ 14 \u53CA\u4EE5\u540E\u53EF\u4EE5\u76F4\u63A5\u5199\u6210\uFF1A</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #C678DD">auto</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">foo</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> [</span><span style="color: #C678DD">=</span><span style="color: #ABB2BF">](</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">){ </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> a </span><span style="color: #C678DD">+</span><span style="color: #ABB2BF"> b; };</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">auto</span><span style="color: #24292F"> </span><span style="color: #8250DF">foo</span><span style="color: #24292F">(</span><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #953800">a</span><span style="color: #24292F">) {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> [</span><span style="color: #CF222E">=</span><span style="color: #24292F">](</span><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #953800">b</span><span style="color: #24292F">){ </span><span style="color: #CF222E">return</span><span style="color: #24292F"> a </span><span style="color: #CF222E">+</span><span style="color: #24292F"> b; };</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h3 id="\u51FD\u6570\u6307\u9488" tabindex="-1">\u51FD\u6570\u6307\u9488</h3>
<p>\u4E00\u4E2A\u53C2\u6570\u8868\u662F <code>(int, int)</code>\uFF0C\u8FD4\u56DE\u503C\u662F <code>void</code> \u7684\u51FD\u6570\uFF0C\u5B83\u7684\u6307\u9488\u7C7B\u578B\u5199\u4F5C <code>void(*)(int, int)</code>\u3002\u5982\u679C\u51FD\u6570\u7684\u5F62\u53C2\u662F\u51FD\u6570\u6307\u9488\u7C7B\u578B\uFF0C\u9700\u8981\u5199\u6210\uFF1A</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #C678DD">void</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">foo</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">void</span><span style="color: #ABB2BF">(*</span><span style="color: #E06C75; font-style: italic">fun</span><span style="color: #ABB2BF">)(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF">)) {}</span><span style="color: #7F848E; font-style: italic"> // &lt;- \u5F62\u53C2\u540D fun \u5728\u7C7B\u578B\u7684\u91CC\u9762\uFF01</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">void</span><span style="color: #24292F"> </span><span style="color: #8250DF">foo</span><span style="color: #24292F">(</span><span style="color: #CF222E">void</span><span style="color: #24292F">(*</span><span style="color: #953800">fun</span><span style="color: #24292F">)(</span><span style="color: #CF222E">int</span><span style="color: #24292F">, </span><span style="color: #CF222E">int</span><span style="color: #24292F">)) {}</span><span style="color: #6E7781"> // &lt;- \u5F62\u53C2\u540D fun \u5728\u7C7B\u578B\u7684\u91CC\u9762\uFF01</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>\u5F53\u7136\uFF0C\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u6A21\u677F\uFF1A</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #C678DD">template</span><span style="color: #ABB2BF">&lt;</span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">F</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">void</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">foo</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">F</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">fun</span><span style="color: #ABB2BF">) {}</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">template</span><span style="color: #24292F">&lt;</span><span style="color: #CF222E">class</span><span style="color: #24292F"> </span><span style="color: #953800">F</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">void</span><span style="color: #24292F"> </span><span style="color: #8250DF">foo</span><span style="color: #24292F">(</span><span style="color: #953800">F</span><span style="color: #24292F"> </span><span style="color: #953800">fun</span><span style="color: #24292F">) {}</span></span>
<span class="line"></span></code></pre></div></code></pre>
</article>
<hr class="talk-separator" />
<article note>
<h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1">\u6784\u9020\u51FD\u6570</h2>
<h3 id="\u590D\u5236\u6784\u9020\u51FD\u6570" tabindex="-1">\u590D\u5236\u6784\u9020\u51FD\u6570</h3>
<p>\u5F62\u5982 <code>C(const C&amp; a)</code> \u7684\u6784\u9020\u51FD\u6570\u3002\u5728\u6CA1\u6709\u58F0\u660E\u7684\u60C5\u51B5\u4E0B\uFF0C\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\uFF0C\u6267\u884C\u6309\u4F4D\u62F7\u8D1D\uFF08<strong>\u6D45\u62F7\u8D1D</strong>\uFF09\u3002\u5728\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\u4F1A\u8C03\u7528\uFF1A</p>
<ul>
<li>\u4F7F\u7528\u53E6\u4E00\u4E2A\u540C\u7C7B\u5BF9\u8C61\u521D\u59CB\u5316</li>
<li>\u521D\u59CB\u5316\u51FD\u6570\u7684\u5F62\u53C2</li>
<li>\u51FD\u6570\u4EE5\u503C\u7684\u5F62\u5F0F\u8FD4\u56DE\u5BF9\u8C61*</li>
</ul>
<p>C++ 17 \u53CA\u4EE5\u4E0A\u8981\u6C42\u5B9E\u73B0\u8FD4\u56DE\u503C\u4F18\u5316\uFF0C\u5982\u679C\u8FD4\u56DE\u503C\u662F\u7EAF\u53F3\u503C\uFF08\u4E00\u4E2A\u76F4\u63A5\u8C03\u7528\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\u4E34\u65F6\u5BF9\u8C61\uFF09\uFF0C\u4E0D\u4F1A\u6267\u884C\u590D\u5236\u6784\u9020\u51FD\u6570\u3002\u6B64\u5916\u8FD8\u6709\u5177\u540D\u8FD4\u56DE\u503C\u4F18\u5316\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://www.zhihu.com/question/443571654/answer/1723219351" target="_blank" rel="noopener">\u8C37\u96E8\u540C\u5B66\u7684\u77E5\u4E4E\u56DE\u7B54</a>\u3002</p>
<p>\u4EE5\u4E0A\u64CD\u4F5C\u7684\u7279\u70B9\u662F\uFF0C\u90FD\u53D1\u751F\u4E86\u201C\u5728\u5185\u5B58\u4E2D<strong>\u5F00\u8F9F\u4E86\u4E00\u5757\u65B0\u7684\u7A7A\u95F4</strong>\uFF0C\u9700\u8981\u7528\u4E00\u4E2A\u540C\u7C7B\u5BF9\u8C61\u521D\u59CB\u5316\u5B83\u201D\u7684\u4E8B\u4EF6\uFF0C\u800C\u5728<strong>\u8D4B\u503C</strong>\u64CD\u4F5C\u4E2D\uFF0C\u8D4B\u503C\u53F7\u5DE6\u4FA7\u7684\u5DE6\u503C<strong>\u5E76\u4E0D\u662F\u4E00\u5757\u65B0\u7684\u7A7A\u95F4</strong>\uFF0C\u56E0\u6B64\u5E76\u4E0D\u8C03\u7528\u590D\u5236\u6784\u9020\u51FD\u6570\u3002\u53E6\u4E00\u79CD\u7406\u89E3\u662F\uFF0C<em>\u8D4B\u503C\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u4E0D\u6D89\u53CA\u521D\u59CB\u5316</em> \u2014\u2014\u800C\u6784\u9020\u51FD\u6570\u672C\u8D28\u4E0A\u90FD\u662F\u5728\u505A\u521D\u59CB\u5316\u64CD\u4F5C\u3002</p>
<h3 id="\u6790\u6784\u51FD\u6570" tabindex="-1">\u6790\u6784\u51FD\u6570</h3>
<p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF08\u6BD4\u5982\uFF0C\u6392\u9664 <code>new</code> \u5206\u914D\u7684\u7A7A\u95F4\u6CA1\u6709\u7528 <code>delete</code> \u91CA\u653E\u7684\u60C5\u51B5\uFF09\uFF0C\u6BCF\u6B21\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u5728\u5C06\u6765\u7684\u67D0\u4E2A\u65F6\u95F4\u70B9\u90FD\u4F1A\u53D1\u751F\u4E00\u6B21\u5BF9\u5E94\u7684\u6790\u6784\u3002\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u6784\u9020\u51FD\u6570\u5305\u62EC<strong>\u6240\u6709\u79CD\u7C7B\u7684\u6784\u9020\u51FD\u6570</strong>\uFF1A\u65E0\u53C2\u6784\u9020\u51FD\u6570\u3001\u7C7B\u578B\u8F6C\u6362\u6784\u9020\u51FD\u6570\u3001\u590D\u5236\u6784\u9020\u51FD\u6570\u3001\u79FB\u52A8\u6784\u9020\u51FD\u6570\u7B49\u3002</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #C678DD">#include</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&lt;iostream&gt;</span></span>
<span class="line"><span style="color: #C678DD">using</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">namespace</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">std</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">A</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #C678DD">public:</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> n;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">A</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">): </span><span style="color: #61AFEF">n</span><span style="color: #ABB2BF">(a) {</span></span>
<span class="line"><span style="color: #ABB2BF">        cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;int, &quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">n</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;, @&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">this</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">A</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">A</span><span style="color: #C678DD">&amp;</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;&amp;,&lt;-&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">a</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">n</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;,-&gt;@&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">this</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl;</span></span>
<span class="line"><span style="color: #ABB2BF">        n</span><span style="color: #C678DD">=</span><span style="color: #E5C07B">a</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">n</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">~A</span><span style="color: #ABB2BF">(){ cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;~, &quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">n</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;, @&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">this</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">A</span><span style="color: #C678DD">&amp;</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">operator</span><span style="color: #ABB2BF">=(</span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">A</span><span style="color: #C678DD">&amp;</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;=, &quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">n</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot; &lt;- &quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">a</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">n</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;, -&gt;@&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #E5C07B">this</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl;</span></span>
<span class="line"><span style="color: #ABB2BF">        n </span><span style="color: #C678DD">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">a</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">n</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">*</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">    A a{</span><span style="color: #D19A66">12</span><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">    cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;--1--&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl;</span></span>
<span class="line"><span style="color: #ABB2BF">    a </span><span style="color: #C678DD">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">9</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    cout</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #98C379">&quot;--2--&quot;</span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF">endl;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/*</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">int, 12, @0x64fe08 // \u7C7B\u578B\u8F6C\u6362\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">--1--</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">int, 9, @0x64fe0c // \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">=, 12 &lt;- 9, @0x64fe08 // \u8D4B\u503C</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">~, 9, @0x64fe0c // \u4E34\u65F6\u5BF9\u8C61\u6790\u6784</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">--2--</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">~, 9, @0x64fe08 // a \u6790\u6784</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">*/</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">#include</span><span style="color: #24292F"> </span><span style="color: #0A3069">&lt;iostream&gt;</span></span>
<span class="line"><span style="color: #CF222E">using</span><span style="color: #24292F"> </span><span style="color: #CF222E">namespace</span><span style="color: #24292F"> </span><span style="color: #953800">std</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">class</span><span style="color: #24292F"> </span><span style="color: #953800">A</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #CF222E">public:</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">int</span><span style="color: #24292F"> n;</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #8250DF">A</span><span style="color: #24292F">(</span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #953800">a</span><span style="color: #24292F">): </span><span style="color: #8250DF">n</span><span style="color: #24292F">(a) {</span></span>
<span class="line"><span style="color: #24292F">        cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;int, &quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">n</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;, @&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0550AE">this</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl;</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #8250DF">A</span><span style="color: #24292F">(</span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #953800">A</span><span style="color: #CF222E">&amp;</span><span style="color: #24292F"> </span><span style="color: #953800">a</span><span style="color: #24292F">) {</span></span>
<span class="line"><span style="color: #24292F">        cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;&amp;,&lt;-&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">a.n</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;,-&gt;@&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0550AE">this</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl;</span></span>
<span class="line"><span style="color: #24292F">        n</span><span style="color: #CF222E">=</span><span style="color: #24292F">a.n;</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #8250DF">~A</span><span style="color: #24292F">(){ cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;~, &quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">n</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;, @&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0550AE">this</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl; }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #953800">A</span><span style="color: #CF222E">&amp;</span><span style="color: #24292F"> </span><span style="color: #CF222E">operator</span><span style="color: #953800">=</span><span style="color: #24292F">(</span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #953800">A</span><span style="color: #CF222E">&amp;</span><span style="color: #24292F"> </span><span style="color: #953800">a</span><span style="color: #24292F">) {</span></span>
<span class="line"><span style="color: #24292F">        cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;=, &quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">n</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot; &lt;- &quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">a.n</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;, -&gt;@&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0550AE">this</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl;</span></span>
<span class="line"><span style="color: #24292F">        n </span><span style="color: #CF222E">=</span><span style="color: #24292F"> a.n;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #CF222E">return</span><span style="color: #24292F"> </span><span style="color: #CF222E">*</span><span style="color: #0550AE">this</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">};</span></span>
<span class="line"><span style="color: #CF222E">int</span><span style="color: #24292F"> </span><span style="color: #8250DF">main</span><span style="color: #24292F">(){</span></span>
<span class="line"><span style="color: #24292F">    A a{</span><span style="color: #0550AE">12</span><span style="color: #24292F">};</span></span>
<span class="line"><span style="color: #24292F">    cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;--1--&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl;</span></span>
<span class="line"><span style="color: #24292F">    a </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #0550AE">9</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">    cout</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #0A3069">&quot;--2--&quot;</span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F">endl;</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6E7781">/*</span></span>
<span class="line"><span style="color: #6E7781">int, 12, @0x64fe08 // \u7C7B\u578B\u8F6C\u6362\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color: #6E7781">--1--</span></span>
<span class="line"><span style="color: #6E7781">int, 9, @0x64fe0c // \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color: #6E7781">=, 12 &lt;- 9, @0x64fe08 // \u8D4B\u503C</span></span>
<span class="line"><span style="color: #6E7781">~, 9, @0x64fe0c // \u4E34\u65F6\u5BF9\u8C61\u6790\u6784</span></span>
<span class="line"><span style="color: #6E7781">--2--</span></span>
<span class="line"><span style="color: #6E7781">~, 9, @0x64fe08 // a \u6790\u6784</span></span>
<span class="line"><span style="color: #6E7781">*/</span></span>
<span class="line"></span></code></pre></div></code></pre>
</article>
<hr class="talk-separator" />
<article note>
<h2 id="\u79FB\u52A8" tabindex="-1">\u79FB\u52A8</h2>
<p>\u590D\u5236\u6784\u9020\u51FD\u6570\u4E2D\u6267\u884C\u5F00\u9500\u6781\u5927\u7684\u6DF1\u62F7\u8D1D\u64CD\u4F5C\uFF0C\u800C\u6709\u65F6\u6211\u4EEC\u53EA\u662F\u60F3\u628A\u503C\u4ECE\u53D8\u91CF\u4F20\u5230\u53E6\u5916\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E4B\u540E<strong>\u4E22\u5F03</strong>\u539F\u53D8\u91CF\uFF0C\u8FD9\u65F6\u4E0D\u5FC5\u8FDB\u884C\u62F7\u8D1D\uFF0C\u53EF\u4EE5\u4F7F\u7528<strong>\u79FB\u52A8</strong>\u64CD\u4F5C\u3002</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">vector</span><span style="color: #C678DD">&lt;int&gt;</span><span style="color: #ABB2BF"> a{</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">vector</span><span style="color: #C678DD">&lt;int&gt;</span><span style="color: #ABB2BF"> b{</span><span style="color: #E5C07B">std</span><span style="color: #ABB2BF">::</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">(a)};</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">vector</span><span style="color: #CF222E">&lt;int&gt;</span><span style="color: #24292F"> a{</span><span style="color: #0550AE">1</span><span style="color: #24292F">};</span></span>
<span class="line"><span style="color: #24292F">vector</span><span style="color: #CF222E">&lt;int&gt;</span><span style="color: #24292F"> b{</span><span style="color: #953800">std</span><span style="color: #24292F">::</span><span style="color: #8250DF">move</span><span style="color: #24292F">(a)};</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p><code>std::move()</code> \u6807\u6CE8\u8BE5\u5DE6\u503C\u4E3A\u201C\u53EF\u79FB\u52A8\u7684\u201D\uFF0C\u5373<em>\u4EA1\u503C</em> \uFF08\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E27\u5931\u5176\u503C\u7684\u6240\u6709\u6743\uFF09\u3002\u4EA1\u503C\u4F1A\u4F18\u5148\u7ED1\u5B9A\u5230\u53F3\u503C\u5F15\u7528\u7C7B\u578B\u4E0A\uFF0C\u56E0\u6B64\u4F1A\u4F18\u5148\u8C03\u7528<strong>\u79FB\u52A8\u6784\u9020\u51FD\u6570</strong>\u548C<strong>\u79FB\u52A8\u8D4B\u503C\u8FD0\u7B97\u7B26</strong>\u3002</p>
<p><code>std::move()</code> \u672C\u8D28\u4E0A\u53EA\u662F\u7C7B\u578B\u8F6C\u6362\uFF0C\u8868\u793A\u53EF\u4EE5\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C<strong>\u4E0D\u4E00\u5B9A\u5B9E\u9645\u79FB\u52A8\u4E86</strong>\uFF08\u5B9E\u9645\u79FB\u52A8\u64CD\u4F5C\u5728\u6784\u9020\u51FD\u6570\u548C\u8FD0\u7B97\u7B26\u91CD\u8F7D\u4E2D\u8FDB\u884C\uFF09\u3002\u4E4B\u540E\u8BE5\u5DE6\u503C\u662F<strong>\u5408\u6CD5</strong>\u4F46<strong>\u672A\u5B9A\u4E49</strong>\u7684\u3002</p>
<p>\u79FB\u52A8\u6784\u9020\u51FD\u6570\u548C\u79FB\u52A8\u8D4B\u503C\u8FD0\u7B97\u7B26\u7684\u53C2\u6570\u662F\u53F3\u503C\u5F15\u7528\u7C7B\u578B\uFF08<code>T&amp;&amp;</code>\uFF09\uFF0C\u6CE8\u610F\u6CA1\u6709 <code>const</code> \u4FEE\u9970\u7B26\uFF0C\u56E0\u4E3A\u79FB\u52A8\u64CD\u4F5C\u4F1A\u4FEE\u6539\u53F3\u503C\u5F15\u7528\u3002</p>
<p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5728\u7C7B\u521D\u59CB\u5316\u5217\u8868\u4E2D\u521D\u59CB\u5316\u6210\u5458\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528 <code>std::move</code> \u79FB\u52A8\u5F62\u53C2\u5BF9\u8C61\u53EF\u4EE5\u51CF\u5C11\u5F00\u9500\u3002</p>
</article>
<hr class="talk-separator" />
<article note>
<h2 id="\u5185\u8054\u51FD\u6570" tabindex="-1">\u5185\u8054\u51FD\u6570</h2>
<p>\u65E0\u8BBA\u662F\u663E\u5F0F\u58F0\u660E <code>inline</code> \u8FD8\u662F\u9690\u5F0F\uFF08\u6210\u5458\u51FD\u6570\u51FD\u6570\u4F53\u76F4\u63A5\u5199\u5728\u7C7B\u5B9A\u4E49\u5185\uFF09\uFF0C\u7F16\u8BD1\u5668\u90FD<strong>\u4E0D\u4E00\u5B9A\u5C06\u5176\u5185\u8054</strong>\u3002\u7ECF\u8BD5\u9A8C\uFF0C<code>gcc</code> \u5728 <code>-O0</code> \u4E0B <em>\u4F3C\u4E4E</em> \u4E0D\u4F1A\u6267\u884C\u5185\u8054\uFF0C\u800C\u5728 <code>-O1</code> \u4E0B\u5219 <em>\u4F3C\u4E4E</em> \u4F1A\u2014\u2014\u65AD\u70B9\u8C03\u8BD5\u5668\u4E2D\u627E\u4E0D\u5230\u663E\u793A\u6216\u9690\u5F0F\u51FD\u6570\u4E86\u3002<s>\u6240\u4EE5\u5185\u8054\u5C31\u662F\u5B89\u6170\u5242</s>\u3002</p>
<p>\u6210\u5458\u51FD\u6570\u5373\u4F7F\u5185\u8054\uFF0C\u4E5F<strong>\u4E0D\u4F1A\u8BA1\u5165\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u7684\u5B58\u50A8\u7A7A\u95F4</strong>\u3002</p>
</article>
<hr class="talk-separator" />
<article note>
<h2 id="\u8F93\u5165\u8F93\u51FA\u6D41" tabindex="-1">\u8F93\u5165\u8F93\u51FA\u6D41</h2>
<h3 id="cstdio-\u8FD8\u662F-iostream" tabindex="-1"><code>&lt;cstdio&gt;</code> \u8FD8\u662F <code>&lt;iostream&gt;</code> \uFF1F</h3>
<p><code>scanf</code> \u548C <code>printf</code> \u867D\u7136\u6027\u80FD\u597D\uFF0C\u4F46\u6BD5\u7ADF\u662F C \u5E93\u51FD\u6570\uFF0C\u6709\u51E0\u5904\u548C C++ \u4E60\u60EF\u4E0D\u7B26\uFF1A</p>
<ol>
<li><code>scanf</code> \u901A\u8FC7<strong>\u6307\u9488</strong>\u8FDB\u884C\u5199\u5165\uFF0C\u5FD8\u8BB0\u53D6\u5730\u5740\u7B26 <code>&amp;</code> \u4F1A\u53D8\u5F97\u4E0D\u5E78\u{1F605}\u3002</li>
<li>\u8FD9\u4E24\u4E2A\u51FD\u6570\u5E76\u4E0D\u652F\u6301 <code>string</code>\uFF08<code>string</code> \u5E76\u6CA1\u5B9A\u4E49\u5230 <code>char*</code> \u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF09\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 <code>.c_str()</code>\u3002</li>
<li><code>scanf(&quot;%c&quot;,...)</code> \u4F1A\u628A<strong>\u7A7A\u767D\u5B57\u7B26</strong>\u8BFB\u5165 <code>char</code>\uFF0C\u800C <code>cin</code> \u4F1A\u8DF3\u8FC7\u6240\u6709\u7A7A\u767D\u5B57\u7B26\u3002\u5982\u679C\u7F13\u51B2\u533A\u91CC\u8FD8\u7559\u7740\u4E0A\u4E00\u884C\u7684\u6362\u884C\u7B26\uFF0C\u5B83\u4F1A\u88AB\u8BFB\u5165 <code>char</code>\u3002\u53EF\u4EE5\u4F7F\u7528 <code>&quot; %c&quot;</code> \uFF0C\u8DF3\u8FC7\u7F13\u51B2\u533A\u91CC<strong>\u6240\u6709\u7A7A\u767D\u5B57\u7B26</strong>\u3002</li>
</ol>
<p>\u8F93\u5165\u6570\u636E\u91CF\u7279\u522B\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8003\u8651\u7528 <code>scanf</code>\u3002\u800C <code>cin</code> \u6162\u4E0E\u5B83\u548C <code>scanf</code> \u540C\u6B65\u7F13\u51B2\u533A\u6709\u5173\uFF0C\u53EF\u4EE5\u4F7F\u7528 (<code>std::</code>)<code>ios::sync_with_stdio(false)</code> \u5173\u95ED\uFF0C\u4E4B\u540E\u6027\u80FD\u548C <code>scanf</code> \u5DEE\u4E0D\u591A\uFF0C\u4F46<strong>\u4E0D\u518D\u652F\u6301\u4E24\u4E2A\u51FD\u6570\u6DF7\u7528</strong>\u3002</p>
<p><code>cin</code> \u8FD8\u6709\u4E00\u4E2A\u5751\uFF0C\u8BFB\u53D6\u4E4B\u540E\uFF0C\u540E\u63A5\u7684<strong>\u7A7A\u767D\u5B57\u7B26\u7559\u5728\u7F13\u51B2\u533A</strong>\u91CC\uFF0C\u5305\u62EC<code>cin.getline()</code>\u3002\u8FD9\u65F6\u5019\u518D\u7528 <code>scanf</code> \u5C31\u53EF\u80FD\u51FA\u73B0\u6DF7\u4E71\u3002</p>
<p>\u53E6\u5916\uFF0C<code>&lt;cstdio&gt;</code> \u8BFB\u5165\u4E00\u4E2A\u5B57\u7B26\u7684\u51FD\u6570\u662F <code>getchar()</code>\uFF0C\u800C <code>&lt;iostream&gt;</code> \u662F <code>cin.get()</code>\uFF0C\u4E22\u5F03\u5B57\u7B26\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>cin.ignore()</code>\u3002</p>
<h3 id="\u683C\u5F0F\u5316" tabindex="-1">\u683C\u5F0F\u5316</h3>
<p><code>printf</code> \u7528\u6765\u4FDD\u7559\u4E09\u4F4D\u5C0F\u6570\u7684\u8BED\u6CD5\u662F <code>&quot;%.3f&quot;</code>\uFF0C\u800C <code>cout</code> \u9700\u8981\u7528 <code>&lt;iomanip&gt;</code> \u5E93\uFF1A</p>
<pre><code class="language-cpp"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">cout </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">setiosflags</span><span style="color: #ABB2BF">(ios::fixed) </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">setprecision</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> MY_DOUBLE </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">resetiosflags</span><span style="color: #ABB2BF">(ios::fixed) </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> endl;</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">cout </span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F"> </span><span style="color: #8250DF">setiosflags</span><span style="color: #24292F">(</span><span style="color: #953800">ios</span><span style="color: #24292F">::fixed) </span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F"> </span><span style="color: #8250DF">setprecision</span><span style="color: #24292F">(</span><span style="color: #0550AE">3</span><span style="color: #24292F">) </span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F"> MY_DOUBLE </span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F"> </span><span style="color: #8250DF">resetiosflags</span><span style="color: #24292F">(</span><span style="color: #953800">ios</span><span style="color: #24292F">::fixed) </span><span style="color: #CF222E">&lt;&lt;</span><span style="color: #24292F"> endl;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>\u8F93\u51FA\u5341\u516D\u8FDB\u5236\u53EF\u4EE5\u4F7F\u7528 <code>%x</code> \u6216\u8005 <code>cout &lt;&lt; hex &lt;&lt; MY_INT</code>\u3002</p>
</article>
</div>`})}}};export{F as category,B as date,C as default,d as tags,i as title};