			<?php global $detect, $deviceType; ?>
			<footer class="footer contact-footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
				<div class="footer-inner">
					<?php include __DIR__ . '/library/images/svg/assembly-svg-logo-icon.svg'; ?>

					<div class="contact-info">
						<a href="mailto:hello@byassembly.com">hello@byassembly.com</a>
						<a href="tel:+01-678-287-7493" title="Phone Number">678.287.7493</a>
					</div>

					<ul class="social dark">
						<li class="instagram"><a href="https://www.instagram.com/byassembly" target="_blank"></a></li><!--
						--><li class="linkedin"><a href="https://www.linkedin.com/company-beta/15154404" target="_blank"></a></li>

						<!-- REMOVED, WAS 2nd in line <li class="twitter"><a href="https://twitter.com/assemblyspaces" target="_blank"></a></li> -->
					</ul>

					<p class="source-org copyright"><span>&copy; <?php echo date('Y'); ?> assembly</span><span>All Rights Reserved</span></p>
				</div>
			</footer>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
